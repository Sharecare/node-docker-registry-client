# node-docker-registry-client [![Build Status](https://drone.admin.sharecare.com/api/badges/Sharecare/node-docker-registry-client/status.svg)](https://drone.admin.sharecare.com/Sharecare/node-docker-registry-client)

A Docker Registry API client for node.js. For documentation, see the
[main repo](https://github.com/joyent/node-docker-registry-client).

This is forked because `npm audit` says docker-registry-client@3.3.0
is using a vulnerable version of `tough-cookie`, which has not been 
updated, so we've updated dependencies so we can use it without 
failing our audits.

## Installation

```
$ npm i --save @sharecare/node-docker-registry-client
```

## Inputs

NA

## Outputs

A version of docker-registry-client that passes `npm audit`

## Dependency or Notable Interaction

NA

## More Information

NA
