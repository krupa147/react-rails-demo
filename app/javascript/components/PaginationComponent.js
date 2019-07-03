import React from "react"
import PropTypes from "prop-types"
class PaginationComponent extends React.Component {
  constructor(props) {
        super(props);
        this.state = { pager: {}, initialPage: 1, pageSize: 10 };
        this.countPages = this.countPages.bind(this)
    }

    countPages(){
      var totalPages = Math.ceil(this.props.totalItems / this.state.pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (this.props.currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (this.props.currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = this.props.currentPage - 5;
                endPage = this.props.currentPage + 4;
            }
        }
        console.log(endPage);
        console.log(startPage);
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
        return pages;
    }

    setPage(page){
      this.props.onChange(page);
    }

    render() {
        if (this.props.totalItems <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        let pages = this.countPages()
        var totalPages = Math.ceil(this.props.totalItems / this.state.pageSize);
        
        return (
            <ul className="pagination">
                <li className={this.props.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(1)}>First</a>
                </li>
                <li className={this.props.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(this.props.currentPage - 1)}>Previous</a>
                </li>
                {pages.map((page, index) =>
                    <li key={index} className={this.props.currentPage === page ? 'active' : ''}>
                        <a onClick={() => this.setPage(page)}>{page}</a>
                    </li>
                )}
                <li className={this.props.currentPage === totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(this.props.currentPage + 1)}>Next</a>
                </li>
                <li className={this.props.currentPage === totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(totalPages)}>Last</a>
                </li>
            </ul>
        );
    }

  }

export default PaginationComponent
