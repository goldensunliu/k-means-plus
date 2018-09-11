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

/**
{ model:
   { observations: [ [Array], [Array], [Array], [Array], [Array], [Array] ],
     centroids: [ [Array], [Array], [Array], [Array] ],
     assignments: [ 1, 2, 3, 0, 0, 0 ] },
  iterations: 1,
  durationMs: 0 }
 **/
