import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const OnboardCard = props => {

  return (
    <div className="onboard-card">
      <h2>Get started</h2>

      <Link to="/register">
        <Button size="lg" className="btn-register">Register Now!</Button>
      </Link>

      <p>Already have an account?</p>

      <Link to="/login">
        <Button size="lg" className="btn-login">Login</Button>
      </Link>
    </div>
  )
}

export default OnboardCard;
