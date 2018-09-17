# K-means++ [![npm version](https://badge.fury.io/js/k-means-plus.svg)](https://badge.fury.io/js/k-means-plus) [![Greenkeeper badge](https://badges.greenkeeper.io/goldensunliu/k-means-plus.svg)](https://greenkeeper.io/) ![travis](https://travis-ci.org/goldensunliu/k-means-plus.svg?branch=master)
[K-means++](https://en.wikipedia.org/wiki/K-means%2B%2B) clustering a classification of data, so that points assigned to the same cluster are similar (in some sense). It is identical to the [K-means algorithm](https://en.wikipedia.org/wiki/K-means_clustering), except for the careful selection of initial conditions. It is a way of avoiding the sometimes poor clusterings found by the standard k-means algorithm. k-means++ variance address this major theoretic shortcoming and guarantee an approximation ratio O(log k) in expectation (over the randomness of the algorithm), where k is the number of clusters used.

[Blog Post](https://medium.com/@sitianliu_57680/how-to-pick-the-optimal-color-palette-from-any-image-ef1342da8b4f)
### Install
```
npm i k-means-plus
yarn add k-means-plus
```
### Usage
```javascript
import KMeansCluster from 'k-means-plus';
const cluster = new KMeansCluster({ distance, maximumIterations, convergedFn });
const results = cluster.cluster(vectors, k);
```
```javascript
import KMeansCluster from 'k-means-plus';

const data = [
  {'company': 'Microsoft' , 'size': 91259, 'revenue': 60420},
  {'company': 'IBM' , 'size': 400000, 'revenue': 98787},
  {'company': 'Skype' , 'size': 700, 'revenue': 716},
  {'company': 'SAP' , 'size': 48000, 'revenue': 11567},
  {'company': 'Yahoo!' , 'size': 14000 , 'revenue': 6426 },
  {'company': 'eBay' , 'size': 15000, 'revenue': 8700},
];

// Create the data 2D-array (vectors) describing the data
let vectors = [];
for (let i = 0 ; i < data.length ; i++) {
  vectors.push([ data[i]['size'] , data[i]['revenue']]);
}

const k = 4;

const cluster = new KMeansCluster();

const {
  model: { observations, centroids, assignments },
  iterations,
  durationMs
} = cluster.cluster(vectors, k);
```

### Constructor
 - **distance**  - `(vector1: [number], vector2: [number]) => number` distance function used for clustering between two vectors. 
  - Default: euclidean distance
 - **maximumIterations** - `number` maximum iterations of clustering. 
  - Default: 200
 - **convergedFn** - `(centroids1: [[number]], centroids2: [[number]]) => boolean` determine if two consecutive set of centroids are converged. 
  - Default: the clusters are converged if the cluster assignments are the same.

### Inputs
 - **vectors**  - `[[number]]` point vectors to cluster 
 - **k** - number of final clusters

### Outputs
```flow js
type result = {
  model: {
    observations: [[number]], // the original vectors to cluster
    centroids: [[number]], // vectors of the centers of cluster
    assignments: [number] // mapping from index of original vector to the index of cluter center it belongs to
  },
  iterations: number, // number of iterations ran before converging
  durationMs: number // the duration of the algorithm
}
```
