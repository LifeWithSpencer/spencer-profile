# Spencer's Secure Hub

import React, { useState } from 'react';
import { 
  Shield, 
  Network, 
  Terminal, 
  Users, 
  GraduationCap, 
  Mail, 
  Github, 
  Linkedin, 
  Globe, 
  Server, 
  Activity, 
  Award, 
  Lock, 
  ChevronRight, 
  Code,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    


      
      {/* Navigation Header */}
      
        


          


            


              
              SPENCER.SEC
            


            
            


              About
              Experience
              Skills
              Leadership
              Education
              Contact
            



            


              
                Connect
              
            



            


              
                {isMenuOpen ?  : }
              
            


          


        



        {/* Mobile Navigation */}
        {isMenuOpen && (
          


            About
            Experience
            Skills
            Leadership
            Education
            Contact
          


        )}
      

      {/* Hero Section */}
      


        


          
          {/* Left Column: Bio Details */}
          


            


               SOC Analyst & Network Operations Trainee
            


            
            


              ASAFA MAHFUZ 

              
                ABIODUN (SPENCER)
              
            


            
            


              Cybersecurity Analyst, Network Operations Specialist, and Student Leader. Focused on defensive security, incident response, network monitoring, and enterprise digital infrastructure defense.
            



            


              "Every attack leaves evidence. Every defense begins with preparation."
            



            


              
                Contact Me
              
              
                 GitHub Profile
              
            


          



          {/* Right Column: Image Frame & Terminal Details */}
          


            
            {/* Official Picture Card */}
            


              


              
              


                


                  
                  {/* REPLACE SOURCE BELOW WITH YOUR IMAGE FILE PATH / URL */}
                  

                  {/* Status Overlay */}
                  


                    


                      


                      Asafa Mahfuz Abiodun
                    


                    
                      VERIFIED ID
                    
                  



                


              


            



            {/* Dashboard Console */}
            


              


                


                  
                  system_status.sh
                


                


                  


                  


                  


                


              



              


                


                  HANDLE: SPENCER
                


                


                  ROLE: NOC Intern @ Galaxy Backbone
                


                


                  LEADERSHIP: President, NAIS LAUTECH
                


                


                  FOCUS: Blue Team / SOC / Incident Response
                


              


            



          



        


      



      {/* Professional Experience */}
      


        


          

Career Journey


          

Professional Experience


        



        


          {/* Galaxy Backbone */}
          


            


              


                


                   Network Operations Centre (NOC) Intern
                


                

Galaxy Backbone Ltd. — Abuja, Nigeria


              


              
                2026 – Present
              
            


            


              


                
                Monitor enterprise network infrastructure to ensure high availability and operational efficiency.
              


              


                
                Support incident detection, escalation, and resolution within the Network Operations Centre.
              


              


                
                Assist in troubleshooting network and connectivity challenges across systems.
              


              


                
                Prepare operational reports and technical documentation while gaining hands-on enterprise IT service delivery experience.
              


            


          



          {/* SQI College of ICT */}
          


            


              


                


                   Information Technology Intern (SIWES)
                


                

SQI College of ICT — Ogbomoso, Oyo State


              


              
                Aug 2025 – Nov 2025
              
            


            


              


                
                Completed practical training in software development and web infrastructure.
              


              


                
                Developed responsive web applications using HTML, CSS, JavaScript, and Node.js.
              


              


                
                Utilized Git and GitHub for team collaboration, version control, and repository administration.
              


            


          


        


      



      {/* Core Competencies & Skills */}
      


        


          

Technical Matrix


          

Core Competencies


        



        


          {/* Security */}
          


            


              
              

Cybersecurity


            


            


              

 Security Operations (Blue Team)


              

 Incident Response


              

 Threat Intelligence


              

 Security Monitoring


              

 SIEM Fundamentals


              

 Vulnerability Assessment


            


          



          {/* Networking */}
          


            


              
              

Networking


            


            


              

 Network Operations


              

 Troubleshooting


              

 TCP/IP, DNS, DHCP


              

 Routing & Switching


              

 Infrastructure Monitoring


            


          



          {/* Systems & Tools */}
          


            


              
              

Systems & Tools


            


            


              

 Linux Administration


              

 Windows Administration


              

 Wireshark & Nmap


              

 Git & GitHub


              

 Technical Documentation


            


          



          {/* Web Technologies */}
          


            


              
              

Web Development


            


            


              

 HTML5 & CSS3


              

 JavaScript


              

 Node.js


              

 Responsive Web Design


            


          


        


      



      {/* Leadership Section */}
      


        


          

Governance & Service


          

Leadership Experience


        



        


          


            


              
              Current Leadership
            


            

President


            

National Association of Ikire Students (NAIS), LAUTECH Chapter


            


              Leading student governance initiatives, coordinating executive committee operations, managing stakeholder relations, and directing student advocacy across campus.
            


          



          


            

Public Relations Officer


            

NAIS, LAUTECH Chapter


            

Directed external communications, student engagement strategies, and official media releases.


          



          


            

Director of Documentation


            

Office of the P.R.O., NANS JCC Oyo Axis


            

Managed record preservation, official reporting, and state-wide student leadership communications.


          



          


            

Chief of Staff to President


            

NAOSS, LAUTECH Chapter (2025)


            

Supervised executive workflow, inter-departmental projects, and administrative operations.


          



          


            

Senator


            

NAOSS Senate Council


            

Represented Ikire, Apomu & Ikoyi Constituency in parliamentary proceedings and policy drafting.


          



          


            

Course Representative


            

Department of Computer Science, LAUTECH


            

Liaised between academic faculty staff and undergraduate computer science students.


          



          


            

Committee Chairman


            

NAOSS Senate Mace Procurement Committee


            

Led resource mobilization and official legislative equipment acquisition projects.


          


        


      



      {/* Education */}
      


        


          

Academic Background


          

Education


        



        


          


            


              
            


            


              

Bachelor of Science (B.Sc.) in Computer Science


              

Ladoke Akintola University of Technology (LAUTECH), Nigeria


              

Status: In View


            


          



          


            Systems Architecture
            Network Security
            Algorithms
          


        


      



      {/* Contact Section */}
      


        


          


            


              

Get In Touch


              

Let Us Connect


            



            


              Open to security operations, network infrastructure, incident response opportunities, and technical collaborations.
            



            


              


                
                mahfuzasafa07@gmail.com</span>
              
              


                
                Abuja, Nigeria
              


              


                
                mahfuzasafa.com
              


            

            


              
                
              
              
                
              
            


          

          


            

 e.preventDefault()}>
              


                


                  Name
                  
                


                


                  Email
                  
                


              



              


                Subject
                
              



              


                Message
                
              



              
                Send Message
              
            


          


        
      

      {/* Footer */}
      


        


          

© {new Date().getFullYear()} ASAFA MAHFUZ ABIODUN (SPENCER). All rights reserved.


          

Designed with precision for secure digital operations.


        


      



    
  );
}

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://spencer-profile.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/36ab168d-2711-48e1-9226-cd2766fba154).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
