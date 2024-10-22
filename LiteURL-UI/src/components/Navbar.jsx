import React from "react";
import {
  Navbar,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function NavbarDefault() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <Navbar className="mx-auto px-4 py-2 lg:px-8 lg:py-4 bg-lime-50">
      <div className="mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer font-bold py-1.5"
        >
          LiteURL
        </Typography>
        <div className="flex items-center gap-x-1">
          <Button
            variant="text"
            size="sm"
            className="hidden lg:inline-block"
            onClick={handleLoginClick}
          >
            <span>Log In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
            onClick={handleRegisterClick}
          >
            <span>Sign Up</span>
          </Button>
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarDefault;