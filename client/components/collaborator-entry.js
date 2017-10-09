import React from 'react';
import { connect } from 'react-redux';
import { Feed } from 'semantic-ui-react';

function CollaboratorEntry({ collaborator }) {
  console.log('collaborator is', collaborator);
  return (
    <Feed>
      <Feed.Event>
        <Feed.Label image={collaborator.userImage} />
        <Feed.Content>
          <Feed.Summary>
            <a href={`/user/${collaborator.id}`} >{collaborator.username}</a>
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
}

const mapState = (state, ownProps) => ({});

const mapDispatch = dispatch => ({});

export default connect(mapState, mapDispatch)(CollaboratorEntry);
