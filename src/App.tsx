import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ReactPlayer controls  url='https://rr5---sn-cvh7knzz.googlevideo.com/videoplayback?expire=1724246482&ei=cpXFZrO_D7-r9fwP6eeVuAM&ip=122.176.149.105&id=o-AE-Zv_l7KKrheHbli1bg5gc94mzEAV-6sAi4wQ5vAYUa&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ==&bui=AQmm2ewWrBpeCBymaL2KNbZAj0IluAM67ib0YTVuAxyJFMXJhQHizgfc3H8nnXKQvVWjp14bn6SzfXPB&vprv=1&svpuc=1&mime=video/mp4&ns=BQ-fsXxnsmmfJbcHnpS9yQwQ&rqh=1&cnr=14&ratebypass=yes&dur=313.840&lmt=1711474472563115&c=TVHTML5_SIMPLY_EMBEDDED_PLAYER&sefc=1&txp=4538434&n=eOWKzBtR8Ahf2A&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,bui,vprv,svpuc,mime,ns,rqh,cnr,ratebypass,dur,lmt&sig=AJfQdSswRAIgY-yVv4XKIhwlZyjDNfl8OW6EH6mKDIRykMfNiFqf9XUCIFBMBJk5WPrvQrcRLdqB-IEarOopOHbkl3DFmTOzLsVH&title=COSTA RICA IN 4K 60fps HDR (ULTRA HD)&rm=sn-ci5gup-qxaek7e,sn-qxae77s&rrc=79,104&fexp=24350516,24350517,24350556,24350561&req_id=605581e2b6c6a3ee&redirect_counter=2&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=NH&mip=49.36.89.24&mm=30&mn=sn-cvh7knzz&ms=nxu&mt=1724226474&mv=u&mvi=5&pl=20&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AGtxev0wRgIhAMfjSkwTTFNccoK-s5jwQqbPx_nmxlLfNeUBBD1n9ZBiAiEA1F4XINJ38Hik7xMJwZRKJ7SRQ8P9_DCODFPQ9sFryL0=' />
      </header>
    </div>
  );
}

export default App;
