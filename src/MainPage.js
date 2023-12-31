import React from "react";
import { BrowserRouter as Router ,Routes, Route,Navigate,} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Pages/Dashboard"
import Login from "./components/Pages/Login"
import Email from "./components/Pages/Analytics";
import Email1 from "./components/Pages/Email";
import Call from "./components/Pages/Call";
import Social from "./components/Pages/Social";
import Sms from "./components/Pages/Sms Campaign";
import Marketing from "./components/Pages/Email Marketing";
import Pipline from "./components/Pages/Pipeline";
export default function MainPage(){

      const baseurl="http://localhost:3000/"

    return(
        <div>
        
          <Sidebar>
              <Routes>


              {/* <Route path={`${baseurl}/`}element={<Email/>} />
               <Route path={`${baseurl}/dash`} element={<Dashboard/>} />
               <Route path={`${baseurl}/email`} element={<Email1/>} />
               <Route path={`${baseurl}/call`} element={<Call/>} />
               <Route path={`${baseurl}/social`} element={<Social/>} />
               <Route path={`${baseurl}/sms`} element={<Sms/>} />
               <Route path={`${baseurl}/analytics`} element={<Email/>} />
               <Route path={`${baseurl}/marketing`} element={<Marketing/>} />
               <Route path={`${baseurl}/pipe`} element={<Pipline/>} /> */}
               
                <Route path="/" element={<Email/>} />
               <Route path="/dash" element={<Dashboard/>} />
               <Route path="/email" element={<Email1/>} />
               <Route path="/call" element={<Call/>} />
               <Route path="/social" element={<Social/>} />
               <Route path="/sms" element={<Sms/>} />
               <Route path="/analytics" element={<Email/>} />
               <Route path="/marketing" element={<Marketing/>} />
               {/* <Route path="/pipe" element={<Pipline/>} />  */}
              

              </Routes>
          </Sidebar>
        
        </div>
    )
}