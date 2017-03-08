import * as React from 'react';

interface IProfileHeader {
  FullName : string;
}

export default class ProfileHeader extends React.Component < IProfileHeader,
void > {
  public render() {
    return (
      <h1>
        <span className="pull-left">
          {this.props.FullName}
        </span>
        <span className="pull-right">
          <img
            src="https://www.omniresources.com/hs-fs/hubfs/cos-images/omni-resources-logo.png"
            alt="Omni Resources"/>
        </span>
        <span className="col-sm-12">
          <hr/>
        </span>
      </h1>
    );
  }
}