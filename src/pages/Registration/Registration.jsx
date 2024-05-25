import React from "react";
import "./Registration.css";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="form-container">
      <div class="wrapper" id="form-info">
        <form action="">
          <h1>Registration</h1>
          <div class="input-box1">
            {/* <label>Fullname</label> */}
            <input type="text" placeholder="Full name" required />
          </div>
          <div class="input-box1">
            {/*<label>Nickname</label> */}
            <input type="text" placeholder="Nickname" required />
          </div>
          <div class="input-box1">
            {/* <!-- <label>Email Address</label> --> */}
            <input type="email" placeholder="Email address" required />
            {/*<i class="bx bxs-user"></i>*/}
          </div>
          <div class="input-box1">
            {/*<label required>Mobaile No.</label> */}
            <input type="number" placeholder="Mobile no." required />
          </div>
          <div class="input-box1">
            {/*<label>Password</label>*/}
            <input type="password" placeholder="Password" required />
            {/*  <i class="bx bxs-lock-alt"></i> */}
          </div>
          <div class="input-box1">
            {/* <label>Confirm Password</label> */}
            <input type="password" placeholder="Confirm password" required />
          </div>

          {/* <!-- <div class="remember-forget">
          <label for=""><input type="checkbox" />Remember Me</label>
        </div> --> */}
          <div class="dropdown">
            <label>First degree from this university/Dept.</label>
            <br />
            <select class="c2" name="firstdegree" id="firstdegree">
              <option value="-1">Select Degree</option>
              <option value="BACHELORS">BACHELORS</option>
              <option value="MASTERS">MASTERS</option>
              <option value="MPhil">MPhil</option>
              <option value="PhD">PhD</option>
            </select>
          </div>
          <div class="dropdown">
            <label>Admission Batch</label>
            <br />
            <select class="c2" name="seconddecree" id="seconddecree">
              <option value="-1">Select Batch</option>
              <option value="CSE-1">CSE-1</option>
              <option value="CSE-2">CSE-2</option>
              <option value="CSE-3">CSE-3</option>
              <option value="CSE-4">CSE-4</option>
              <option value="CSE-5">CSE-5</option>
              <option value="CSE-6">CSE-6</option>
              <option value="CSE-7">CSE-7</option>
              <option value="CSE-8">CSE-8</option>
              <option value="CSE-9">CSE-9</option>
              <option value="CSE-10">CSE-10</option>
              <option value="CSE-11">CSE-11</option>
              <option value="CSE-12">CSE-12</option>
              <option value="CSE-13">CSE-13</option>
              <option value="CSE-14">CSE-14</option>
              <option value="CSE-15">CSE-15</option>
              <option value="CSE-16">CSE-16</option>
              <option value="CSE-17">CSE-17</option>
              <option value="CSE-18">CSE-18</option>
              <option value="CSE-19">CSE-19</option>
              <option value="CSE-20">CSE-20</option>
              <option value="CSE-21">CSE-21</option>
              <option value="CSE-22">CSE-22</option>
              <option value="CSE-23">CSE-23</option>
              <option value="CSE-24">CSE-24</option>
              <option value="CSE-25">CSE-25</option>
              <option value="CSE-26">CSE-26</option>
              <option value="CSE-27">CSE-27</option>
              <option value="CSE-28">CSE-28</option>
              <option value="CSE-29">CSE-29</option>
              <option value="CSE-30">CSE-30</option>
            </select>
          </div>
          <div class="dropdown">
            <label>Hall</label>
            <br />
            <select class="c2" name="hall" id="hall">
              <option value="-1">Select Hall</option>
              <option value="3069">A F M Kamaluddin Hall</option>
              <option value="3067">Al Beruni Hall</option>
              <option value="3066">
                Bangabondhu Sheikh Majibur Rahman Hall
              </option>
              <option value="3078">
                Bangamata Begum Fazilatunnessa Mujib Hall
              </option>
              <option value="3076">Begum Khaleda Zia Hall</option>
              <option value="3079">Begum Sufia Kamal Hall</option>
              <option value="3071">Bishwakabi Rabindranath Tagore Hall</option>
              <option value="3075">Fazilatunnesa Hall</option>
              <option value="3072">Jahanara Imam Hall</option>
              <option value="3064">Mir Mosharraf Hossain Hall</option>
              <option value="3070">Mowlana Bhashani Hall</option>
              <option value="3073">Nawab Faizunnesa Hall</option>
              <option value="3074">Pritilata Hall</option>
              <option value="3068">Shaheed Rafiq-Jabbar Hall</option>
              <option value="3065">Shaheed Salam-Barkat Hall</option>
              <option value="3077">Sheikh Hasina Hall</option>
            </select>
          </div>
          <div>
            <label for="">Profile Picture </label>
            <br />
            <input type="file" name="" id="" />
          </div>
          <div class="dropdown">
            <label for="">Blood Group</label>
            <br />
            <select class="c2" name="bloodgroup" id="bloodgroup">
              <option value="">-Choose Blood Group-</option>
              <option value="A_POSITIVE">A+</option>
              <option value="A_NEGETIVE">A-</option>
              <option value="B_POSITIVE">B+</option>
              <option value="B_NEGETIVE">B-</option>
              <option value="O_POSITIVE">O+</option>
              <option value="O_NEGETIVE">O-</option>
              <option value="AB_POSITIVE">AB+</option>
              <option value="AB_NEGETIVE">AB-</option>
            </select>
          </div>
          <div class="btnsec">
            <button type="submit" class="btn1">
              <a href="http://127.0.0.1:5500/Website%20with%20Login%20&%20Registration%20Form/login.html">
                Cancel
              </a>
            </button>
            <button type="submit" class="btn">
              Register
            </button>
          </div>
          <div class="register-link register-content">
            <p>
              Have an account?
              <Link to='/login'>
              Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Registration;
