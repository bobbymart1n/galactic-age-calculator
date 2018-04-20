import { Conversion } from './Conversion.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(function() {
  const dateTest = new Conversion(30);
  console.log(dateTest.yearInSeconds());
});
