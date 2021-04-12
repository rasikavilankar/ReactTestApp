import React, { useState } from "react";
import "./App.css";
import DocumentList from "./components/DocumentList";
import AddDocument from "./components/AddDocument";
import EditDocument from "./components/EditDocument";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

const App = () => {
  const documentData = [
    {
      id: 1,
      docTitle: "document1",
      description: "desc1",
      publisher: "publisher1",
    },
    {
      id: 2,
      docTitle: "document2",
      description: "desc2",
      publisher: "publisher2",
    },
    {
      id: 3,
      docTitle: "document3",
      description: "desc3",
      publisher: "publisher3",
    },
  ];

  const initialFormState = {
    id: null,
    docTitle: "",
    description: "",
    publisher: "",
  };

  const [documents, setDocuments] = useState(documentData);
  const [componentRef, setComponentRef] = useState(null);
  const [editing, setEditing] = useState(false);
  const [currentDocument, setCurrentDocument] = useState(initialFormState);

  // Add Document...
  const addDocument = (document) => {
    document.id = documents.length + 1;
    setDocuments([...documents, document]);
  };
  // delete documents...
  const deleteDocument = (id) => {
    setDocuments(documents.filter((document) => document.id !== id));
  };
  // set value for edit document form...
  const editDocument = (document) => {
    setEditing(true);
    setCurrentDocument({
      id: document.id,
      docTitle: document.docTitle,
      description: document.description,
      publisher: document.publisher,
    });
  };
  //  update document
  const updateDocument = (id, updatedDocument) => {
    setEditing(false);
    console.log(id, "iddddd");
    setDocuments(
      documents.map((item) => (item.id === id ? updatedDocument : item))
    );
  };

  return (
    <div className="container">
      <h2 className="text-center">React.js CRUD App using Hooks</h2>
      <div className="row">
        {editing ? (
          <div>
            <h2 className="text-center">Edit Document</h2>
            <div className="col-md-8 col-md-offset-2">
              <EditDocument
                editing={editing}
                setEditing={setEditing}
                currentDocument={currentDocument}
                updateDocument={updateDocument}
              />
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-center">Add Document</h3>
            <div className="col-md-8 col-md-offset-2">
              <AddDocument addDocument={addDocument} />
            </div>
          </div>
        )}
      </div>
      <div className="row">
        <h3 className="text-center">Document List</h3>
        <ReactToPrint content={() => componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => <button onClick={handlePrint}>Print</button>}
          </PrintContextConsumer>
        </ReactToPrint>
        <div className="col-md-6 col-md-offset-3">
          <DocumentList
            ref={(el) => setComponentRef(el)}
            documents={documents}
            editDocument={editDocument}
            deleteDocument={deleteDocument}
          />
        </div>
      </div>
      <div class="container">
        <div className="row">
          <div className="col-md-3">
            <input
              class="form-control"
              type="text"
              placeholder="Input Your Name Here"
            />
          </div>
          <div className="col-md-3">
            <input
              class="form-control"
              type="text"
              placeholder="Input Your Name Here"
            />
          </div>
          <div className="col-md-3">
            <input
              class="form-control"
              type="text"
              placeholder="Input Your Name Here"
            />
          </div>
          <div className="col-md-3">
            <input
              class="form-control"
              type="text"
              placeholder="Input Your Name Here"
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3">
            <input
              class="form-control"
              type="text"
              placeholder="Input Your Name Here"
            />
          </div>
          <div className="col-md-3">
            <input
              class="form-control"
              type="text"
              placeholder="Input Your Name Here"
            />
          </div>
          <div className="col-md-3">
            <input
              class="form-control"
              type="text"
              placeholder="Input Your Name Here"
            />
          </div>
          <div className="col-md-3">
            <input
              class="form-control"
              type="text"
              placeholder="Input Your Name Here"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <button type="button" style={{ marginRight: "20px" }}>
            Button 1
          </button>
          <button type="button">Button 2</button>
        </div>
      </div>
    </div>
  );
};

export default App;
