# t4gm-unpublished: a example of removing a previously published linked data resource from the Web

## What was/is t4gm.info?

Published in 2009, t4gm.info was a Linked Data rendering in RDFa of the Library of Congress' Thesaurus for Graphic Materials. It is now an early example of [a linked data set that has been permanently removed from the Web][1], since it has been superceded by the U.S. Library of Congress' own [Thesaurus for Graphic Materials][2], now provided as part of the Library of Congress's linked data services. t4gm.info was unpublished in 2012.

## What does it do now?

[This page][3] provides a brief [VoiD][4] description of the t4gm.info dataset and its relationship to the equivalent information at id.loc.gov, expressed in RDFa. In addition, this site provides a specific mapping of resources from t4gm.info to id.loc.gov as [a VoiD linkset][5]. Both the VoiD dataset and linkset descriptions can be retrieved through content negotiation in a variety of linked data formats (i.e., in either RDF/XML, Turtle, or N-Triples.) GET requests for t4gm.info concept resources are redirected as 301 Moved Permanently to the equivalent resource at id.loc.gov. GET requests for any other resources that were part of the original t4gm.info site are returned as 410 Gone.

## Who is responsible?

t4gm.info is an experimental project of [Bradley P. Allen][6].

## Requirements

* Node
* NPM

## Installation

    $ git clone https://github.com/bradleypallen/t4gm-unpublished.git
    $ cd t4gm-unpublished
    $ npm install .
    $ npm start

## For more information

Additional information about the linked data at t4gm.info can be found at [the entry for the dataset on the CKAN Data Hub][7].

## Future work

Our intention is to generalize this implementation into a Node module that can support unpublishing of linked data resources in general.

## License

MIT.

 [1]: http://patterns.dataincubator.org/book/unpublish.html
 [2]: http://id.loc.gov/vocabulary/graphicMaterials.html
 [3]: http://www.t4gm.info
 [4]: http://www.w3.org/TR/void/
 [5]: http://www.t4gm.info/linkset
 [6]: http://bradleypallen.org
 [7]: http://thedatahub.org/en/dataset/t4gm-info
 
