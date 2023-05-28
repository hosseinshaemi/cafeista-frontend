import React, { Component } from "react";
import ReactModal from "react-modal";
import "./MenuTab.css";
import Item from "../Item/Item";
import NewItem from "../Item/NewItem";
import { FiEdit3 } from "react-icons/fi";
import "../Item/Item.css";
import { Input, Button, IconButton } from "@mui/material";
import { MdDelete, MdDoneAll } from "react-icons/md";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected || 0,
      tabs: props.children,
      showModal: false,
      editedTabTitle: "",
      deleteTabIndex: null,
    };
    this.handleAddTab = this.handleAddTab.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSaveChanges = this.handleSaveChanges.bind(this);
    this.handleTabTitleChange = this.handleTabTitleChange.bind(this);
    this.handleDeleteTab = this.handleDeleteTab.bind(this);
    this.handleConfirmTabDelete = this.handleConfirmTabDelete.bind(this);
  }

  handleChange(index) {
    this.setState({ selected: index });
  }

  handleAddTab() {
    this.setState((prevState) => ({
      tabs: [
        ...prevState.tabs,
        <Panel
          title={`tab ${prevState.tabs.length + 1}`}
          key={prevState.tabs.length + 1}
        >
          <div className="menu-items">
            <NewItem />
          </div>
        </Panel>,
      ],
      selected: prevState.tabs.length,
    }));
  }

  handleOpenModal() {
    const { tabs, selected } = this.state;
    const tabTitle = tabs[selected].props.title;
    this.setState({ showModal: true, editedTabTitle: tabTitle });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleSaveChanges() {
    const { tabs, selected, editedTabTitle } = this.state;
    const updatedTabs = tabs.slice();
    updatedTabs[selected] = React.cloneElement(updatedTabs[selected], {
      title: editedTabTitle,
    });
    this.setState({ showModal: false, tabs: updatedTabs });
  }

  handleTabTitleChange(event) {
    this.setState({ editedTabTitle: event.target.value });
  }

  handleDeleteTab(index) {
    this.setState({ deleteTabIndex: index });
  }

  handleConfirmTabDelete() {
    const { tabs, deleteTabIndex } = this.state;
    const updatedTabs = tabs.slice();
    updatedTabs.splice(deleteTabIndex, 1);
    this.setState({
      showModal: false,
      tabs: updatedTabs,
      deleteTabIndex: null,
    });
  }

  render() {
    const { tabs, selected, showModal, deleteTabIndex } = this.state;
    const editedTabTitle = tabs[selected]?.props.title;
    return (
      <div >
        <ul className="inline">
          {this.state.tabs.map((elem, index) => {
            let style = index === this.state.selected ? "selected" : "";
            return (
              <li
                className={style}
                key={index}
                onClick={() => this.handleChange(index)}
              >
                <span className="tab-title" style={{fontFamily:"IRANSansXBold"}}>{elem.props.title}</span>
                <span className="tab-icon">
                  {style === "selected" && (
                    <FiEdit3
                      size={15}
                      style={{ marginRight: "10px" }}
                      onClick={() => this.handleOpenModal()}
                    />
                  )}
                </span>
              </li>
            );
          })}
          <li className="add-tab" onClick={this.handleAddTab}>
            +
          </li>
        </ul>
        <div
          style={{
            backgroundColor: "#E4DDDD",
            height: "85vh",
            marginTop: "3.5vh",
            borderRadius: "8px",
          }}
        >
          <div className="tab">{this.state.tabs[this.state.selected]}</div>
        </div>
        <ReactModal
          isOpen={this.state.showModal}
          onRequestClose={() => this.handleCloseModal()}
          className="edit-modal"
          contentLabel="Edit Modal"
          overlayClassName="Overlay"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <Input
            color="warning"
            style={{ marginRight: "7px" }}
            value={this.state.editedTabTitle}
            onChange={(event) => this.handleTabTitleChange(event)}
          />
          <div>
            <IconButton
              style={{ maxWidth: "40px", maxHeight: "40px" }}
              color="inherit"
              onClick={() => this.handleSaveChanges()}
            >
              <MdDoneAll />
            </IconButton>

            <IconButton
              style={{ maxWidth: "40px", maxHeight: "40px" }}
              onClick={() => this.handleDeleteTab(selected)}
            >
              <MdDelete />
            </IconButton>
          </div>
        </ReactModal>
        <Dialog
          style={{ direction: "rtl" }}
          open={deleteTabIndex !== null}
          onClose={() => this.setState({ deleteTabIndex: null })}
        >
          <DialogTitle color={"#ed6c02"} style={{fontFamily:"IRANSansXBold"}}>توجه</DialogTitle>
          <DialogContent>
            <p style={{fontFamily:"IRANSansXLight"}}>آیا از حذف کردن {editedTabTitle} اطمینان دارید؟</p>
          </DialogContent>
          <DialogActions>
            <Button
              style={{fontFamily:"IRANSansXLight"}}
              color="inherit"
              onClick={() => this.setState({ deleteTabIndex: null })}
            >
              انصراف
            </Button>
            <Button color="warning" onClick={this.handleConfirmTabDelete} style={{fontFamily:"IRANSansXBold"}}>
              حذف
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function Panel(props) {
  return <div>{props.children}</div>;
}

function Tab({ data }) {
  return (
    <Tabs selected={0}>
      {data.map((category, index) => (
        <Panel title={category.categoryName} key={index}>
          <div className="menu-items">
            <NewItem />
            {category.items.map((item, itemIndex) => (
              <Item key={itemIndex} info={item} />
            ))}
          </div>
        </Panel>
      ))}
    </Tabs>
  );
}

export default Tab;
