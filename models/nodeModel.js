class Node {
  // a node is identified by port, macID, ip
  constructor(ip, port, macId) {
    this.ip = ip;
    this.port = port;
    this.macId = macId;
    this.neighbours = []; //empty array of neighbours when initialized
    this.neighboursMap = new Map();
    //this also needs two different ids
    //global id, mqtt_topic_id
    this.isActive = false; //intialized as a inactive sensor
    //active means it can communicate with the central server
  }
  __populate_id(nodeId) {
    //private function to populate the id of the node
    this.nodeId = nodeId;
  }
  addNeighbour(neighbourId, edgeParams) {
    //edge params represent the connection configuration between two different nodes
    //check if already node exist
    if (this.neighboursMap.has(neighbourId)) {
      return;
    }
    this.neighboursMap.set(neighbourId, 1);
    this.neighbours.push({ id: neighbourId, params: edgeParams });
  }
  //implement function to send alive signal to the node
}
