// External libraries and modules
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from '../firebase.js';
import { 
  doc, 
  getDoc, 
  addDoc, 
  setDoc, 
  getDocs, 
  collection, 
  updateDoc 
} from "firebase/firestore";
import { createRoot } from "react-dom";

// CSS and image imports
import "../App.css";
import logo from '../img/logo.webp';
import icon from '../img/profileIcon.jpeg';
import back from '../img/ParkImg.jpg';
import "./index.css"; // Your CSS styles

// Components
import Main from "./pages/Main.js";
import LogIn from "./pages/LogIn.js";
import SignIn from "./pages/SignIn.js";
import Profile from "./pages/Profile.js";