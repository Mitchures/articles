import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";

export default class EditArticleFormDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  update = (id, title, content) => {
    this.handleClose();
    axios.put("/api/article/" + id + "/update", {
      title: title,
      content: content
    });
  };

  render() {
    return (
      <div>
        <Button color="default" aria-label="Add" onClick={this.handleClickOpen}>
          Edit
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit Article</DialogTitle>
          <DialogContent>
            <TextField
              margin="normal"
              id="title"
              type="text"
              label="Title of Article"
              defaultValue={this.props.article.title}
              fullWidth
              onChange={e => this.setState({ title: e.target.value })}
            />
            <TextField
              type="text"
              id="title"
              label="Content"
              fullWidth
              margin="normal"
              defaultValue={this.props.article.content}
              onChange={e => this.setState({ content: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.update(this.props.article.id, this.state.title, this.state.content)} color="primary">
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}