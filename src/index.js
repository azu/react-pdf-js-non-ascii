// MIT © 2017 azu
"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
import PDF from "react-pdf-js";
// hack for non-ascii pdf content
// dynamic loading cMap files
window.PDFJS.cMapUrl = `/pdfjs-dist/cmaps/`;
window.PDFJS.cMapPacked = true;

class PDFPagePreview extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className="PDFPagePreview">
            <PDF file={this.props.pdfURL}
                 page={this.props.pageNumber}
            />
        </div>;
    }
}

ReactDOM.render(<PDFPagePreview pdfURL="resources/presentation.pdf" page={1}/>, document.getElementById("js-app"));