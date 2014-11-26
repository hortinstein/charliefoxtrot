charliefoxtrot
==============
 
A playground for CoreOS service oriented architecture.

# Features: 
  - Automated Deployment
  - Automated Patching 
  - Automated Rollback
  - Dynamic Scaling
  - Platform Independant (Vagrant, DigitalOcean, AWS)
  - Configurable
  - Secure (SSL/VPN)
  - Recoverable
  - Continuous Zero Downtime deployment

# Cluster Components
  - Redis Cluster
  - Mongo with Oplog tailing
  - Node agent
  - Haxproxy
  - Node Service Monitor
  - Key service
  
# Node agent use cases:
  - Product container data (CPU/Mem/Reqs per sec)
  - consume cpu with arbitary work
  - exchange info with other processes
  - consume database resources
  - exec commands

# Node service Monitor:
  - graphical monitoring
  - track container movement
  - graphite output
  - meteor based
  - can scale systems
  - automated testing
  - network layout graphs

# Cluster Requirements:
  - Secure links between systems
  - Sevice discovery
  - Rolling update/downgrade
  - respawn killed services
  - distinguish between processes
  - can be deployed to several cloud services

# Redis
  - failover

# Mongo 
  - oplog tailing
  - failover

# Haproxy
  - load balance traffic
  - handle redis/mongo
  - autoregister agents

# Potential Test Cases
  - 100% CPU load
  - Rebalance nodes based on load
  - upgrade
  - rollback
  - request handling 
  - process killed 
  - operating system patching
  
# Implementation Plan
  - 1) Program agent and test
  - 2) Program simple server and test
  - 3) Docker Environment Setup
  - 4) Basic Cluster Setup 
  - 5) Dynamic config of cluster 
  - 6) Standup of ambassador
  - 7) Haproxy
  - 8) Redundant Databases
  - 9) key mgmt
  - 10) SSL 
  - 11) Choas testing
  - 12) Scaling up/down
  - 13) dynamic scaling
  - 14) Centralized logging
  - 15) Centralized metris
  - 16) documentation
  - 17) regression tests
  