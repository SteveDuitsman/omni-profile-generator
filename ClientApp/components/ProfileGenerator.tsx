import ProfileHeader from './ProfileGenerator/ProfileHeader';
import * as React from 'react';

export default class ProfileGenerator extends React.Component < void, void > {
  public render() {
    return (
      <div>
        <ProfileHeader FullName="Steve Duitsman"></ProfileHeader>
        
      </div>
    );
  }
}