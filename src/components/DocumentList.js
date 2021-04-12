import React from "react";

class DocumentList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Publisher</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.documents.length > 0 ? (
              this.props.documents.map((item) => (
                <tr key={item.id}>
                  <td>{item.docTitle}</td>
                  <td>{item.description}</td>
                  <td>{item.publisher}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.editDocument(item);
                      }}
                      className="btn btn-default"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => this.props.deleteDocument(item.id)}
                      className="btn btn-default"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>No any document available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default DocumentList;
