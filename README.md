#PEP Proxy - Wilma

## [I. Introduction](#def-api-blueprint-language)
+ [Introduction](#def-introduction)
+ [API Blueprint](#def-api-blueprint)
+ [API Blueprint document](#def-api-blueprint-document)
+ [Blueprint section](#def-blueprint-section)
    + [Section types](#def-section-types)
    + [Section structure](#def-section-structure)
    + [Keywords](#def-keywords)
    + [Identifier](#def-identifier)
    + [Description](#def-description)
    + [Nested sections](#def-nested-sections)

## [II. Sections Reference](#def-sections-reference)

### Abstract
+ [Named section](#def-named-section)
+ [Asset section](#def-asset-section)
+ [Payload section](#def-payload-section)

### Section Basics
+ [Metadata section](#def-metadata-section)
+ [API name & overview section](#def-api-name-section)
+ [Resource group section](#def-resourcegroup-section)
+ [Resource section](#def-resource-section)
+ [Resource model section](#def-model-section)
+ [Schema section](#def-schema-section)
+ [Action section](#def-action-section)
+ [Request section](#def-request-section)
+ [Response section](#def-response-section)
+ [URI parameters section](#def-uriparameters-section)
+ [Attributes section](#def-attributes-section)
+ [Headers section](#def-headers-section)
+ [Body section](#def-body-section)

### Going Further
+ [Data Structures section](#def-data-structures)
+ [Relation section](#def-relation-section)


## [III. Appendix](#def-appendix)
+ [URI Templates](#def-uri-templates)

---

<br>

<a name="def-api-blueprint-language"></a>
# I. API Blueprint Language

<a name="def-introduction"></a>
## Introduction

This project is part of [FIWARE](http://fiware.org). You will find more information abour this FIWARE GE [here](http://catalogue.fiware.org/enablers/pep-proxy-wilma).

##Installation

PEP oauth2 authentication proxy for FI-ware GE services

- Software requirements:

	+ nodejs 
	+ npm
	Note: Both can be installed from (http://nodejs.org/download/)

- Clone Proxy repository:

<pre>
git clone https://github.com/ging/fi-ware-pep-proxy.git
</pre>

- Install the dependencies:

<pre>
cd fi-ware-pep-proxy/
npm install
</pre>

- Duplicate config.template in config.js and configure app host there. 

<pre>
config.app_host = 'www.google.es'; // Hostname to forward authenticated requests
config.app_port = '80';            // Port where the HTTP server is running
</pre>

- Start proxy server

<pre>
sudo node server
</pre>

How to use
===================

Requests to proxy should be made with a special HTTP Header: X-Auth-Token. 
This header contains the OAuth access token obtained from FI-WARE IDM GE.

Example of request:

<pre>
GET / HTTP/1.1
Host: proxy_host
X-Auth-Token:z2zXk...ANOXvZrmvxvSg
</pre>

To test the proxy you can generate this request running the following command:

<pre>
curl --header "X-Auth-Token:z2zXk...ANOXvZrmvxvSg" http://proxy_host
</pre>

Once authenticated, the forwarded request will include additional HTTP headers with user info:

<pre>
X-Nick-Name: nickname of the user in IdM
X-Display-Name: display name of user in IdM
X-Roles: roles of the user in IdM
X-Organizations: organizations in IdM
</pre>

## License

The MIT License

Copyright (C) 2012 Universidad Politécnica de Madrid.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

