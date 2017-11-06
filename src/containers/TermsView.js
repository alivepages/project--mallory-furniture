import React, { Component } from 'react';

export default class TermsView extends Component {
  render() {
    return (
      <section>
        <div className="content block-text">
          <h1>Terms + Conditions</h1>
          <article>
            <h2>Terms of Service</h2>
            <p>All buyers (hereinafter 'You' or 'User') need to register by creating a username and a password for login.</p>
            <p>The information you provide needs to be accurate. You may not use false information or impersonate another
            person of company through your account.</p>
            <p>You are responsible for maintaining the confiadentiality of the login details and Your account.
            Artlimes reserves the right to reject Your subscription for any or no reason, in particular, due to Users.</p>
            breach of these Terms of Service.
          </article>
          <article>
            <h2>Privacy Police</h2>
            <p>Users personal data handling and protection is governed under the terms hereof and the provisions of general data Protection regulation (Regulation EC/679/2016).</p>
            <p>We dont share your personal information with anyone except to comply with the law, develop our products, or protect our rights.</p>
            <p>Mallory Furniture collects non-personally-identifying information...</p>
          </article>
        </div>
      </section>
    );
  }
}
