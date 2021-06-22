import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { userAction } from "./actions";

class Page extends PureComponent {
  componentDidMount() {
    this.props.getUser("id");
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        Example User:
        {JSON.stringify(user)}
        <h1>
          Add button action(redux) by get git users and render with material ui
          components:
        </h1>
        <br />
        url users: https://api.github.com/users
        <br />
        <br />
        material ui avatar component, add more components:
        <br />
        https://material-ui.com/es/components/avatars/
        <br />
        <br />
        add prop since json object to show/hide avatar
        <br />
        <br />
        add prop since json object to change view type as card or row in table
        <div>
          Example object:
          <br />
          <br />
          {JSON.stringify(
            {
              avatar: true,
              viewTyoe: "table|card"
            },
            null,
            2
          )}
          <Button variant="contained" color="primary">
            Primary
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (info) => dispatch(userAction(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
