# t4gm-unpublished: removing previously published linked data  from the Web

## What was/is t4gm.info?

Published in 2009, t4gm.info was originally a Linked Data rendering in RDFa of the Library of Congress' [Thesaurus for Graphic Materials][1]. It is now an  example of [a linked data set that has been permanently removed from the Web][1], having been made obsolete by the version now provided as part of the U.S. Library of Congress's linked data services. t4gm.info was unpublished in 2012.

## What does it do now?

[This page][3] provides [VoiD][4] metadata describing the t4gm.info dataset and its relationship to the equivalent information at id.loc.gov, expressed in RDFa. This site also provides a mapping of resources from t4gm.info to id.loc.gov as [a VoiD linkset][5]. Both the dataset metadata and linkset can be retrieved through content negotiation as either RDF/XML, Turtle, or N-Triples documents. GET requests for t4gm.info concept resources are redirected with status code 301 (Moved Permanently) to the equivalent resource at id.loc.gov. GET requests for any other resources that were part of the original t4gm.info site are rejected with status code 410 (Gone).

## Who is responsible?

t4gm.info is an experimental project of [Bradley P. Allen][6].

## Requirements

* [Node][7]
* [NPM][8]

## Installation

    $ git clone https://github.com/bradleypallen/t4gm-unpublished.git
    $ cd t4gm-unpublished
    $ npm install .
    $ npm start

## For more information

Additional information about the linked data at t4gm.info can be found at [the entry for the dataset on the CKAN Data Hub][9].

## Future work

Our intention is to generalize this implementation into a Node module that can support unpublishing of linked data resources in general.

## Licensing

The code is provided under the terms of an [MIT License][10]. The data in /public/data is provided under terms of an [Open Database License][11].

 [1]: http://id.loc.gov/vocabulary/graphicMaterials.html
 [2]: http://patterns.dataincubator.org/book/unpublish.html
 [3]: http://www.t4gm.info
 [4]: http://www.w3.org/TR/void/
 [5]: http://www.t4gm.info/linkset
 [6]: http://bradleypallen.org
 [7]: http://nodejs.org
 [8]: http://npmjs.org
 [9]: http://thedatahub.org/en/dataset/t4gm-info
 [10]: http://www.opensource.org/licenses/mit-license.php
 [11]: http://opendatacommons.org/licenses/odbl/1.0/
 
