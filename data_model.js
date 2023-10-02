model = {
    "nodes": [
      {
        /*
            Dont overload the nodes with excessive information
            for a given node its necessary to only know the neighbours so we will only send the neighbour values to the node
        */
        "id": "node1",
        /*
            id is given by the central server to the node
            When a new node needs to be introduced, we need to register it to the central broker
            The central broker will accept the metadata of the node {IP address, MAC address, ... } and
            it will create a unique ID for the node
            Each node has a unique 256bit ID hash which is stored in the central sever device table for reference
            struct Node{} -> it represents a node and its neighbours (2 way comm) represents a graph network

            class Node{
            private:
                var deviceType = "sensor"
                var ip = None
                var port = None
                var id = None
                var privateKey
                var neighbours = [{"id" : n1.id , "distance" : 2}, {"id" : n2.id, "distance" : 3}]
            }

            In the database we can store this against the unique id of the node

        */
        "type": "sensor",
        "ip": "192.168.1.100",

        "port": 8080,
        "neighbors": [
          {
            "id": "node2",
            "distance": 2
          },
          {
            "id": "node3",
            "distance": 3
          }
        ]
      },
      {
        "id": "node2",
        "type": "actuator",
        "ip": "192.168.1.101",
        "port": 8080,
        "neighbors": [
          {
            "id": "node1",
            "distance": 2
          },
          {
            "id": "node3",
            "distance": 4
          }
        ]
      },
      {
        "id": "node3",
        "type": "sensor",
        "ip": "192.168.1.102",
        "port": 8080,
        "neighbors": [
          {
            "id": "node1",
            "distance": 3
          },
          {
            "id": "node2",
            "distance": 4
          }
        ]
      }
    ]
  }
  