import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'gatsby';

const Thanks = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>You will be contacted as soon as possible!</p>
          <p>In the meantime, you can check out our other projects</p>
          <Link className="button" to={'/projects'}>
            Bring me there
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

Thanks.displayname = 'Thanks';
export default Thanks;
