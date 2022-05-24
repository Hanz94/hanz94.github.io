import React from 'react';
import './App.css';
import logo from './assets/img/photo.jpeg';
import profile_photo from './assets/img/photo_no_back.jpg';

function App() {
  return (
    <div className="App">
      <nav id="hanz-navbar" className="navbar navbar-light navbar-expand-md fixed-top py-3">
        <div className="container"><a className="navbar-brand d-flex align-items-center" href="#"><span><span><img
            id="hanz-navbar-img" className="rounded-circle" src={logo}/></span>Hansika Weerasena</span></a>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-2"><span
              className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
          <div id="navcol-2" className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Research</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="hanz-home-about-pre" className="container"></div>

      <div className="container">
        <div className="row">
          <div className="col-lg"></div>
          <div className="col text-center">
            <img id="hanz-home-about-img" className="rounded-circle"
                                                src={profile_photo}/>
          <ul className="list-inline">
            <li className="list-inline-item me-4">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                   width="16" height="16"
                   viewBox="0 0 16 16"
                   fill="currentColor"><path d="M 2.757813 1 C 1.792969 1 1 1.792969 1 2.757813 L 1 12.246094 C 1 13.207031 1.792969 14 2.757813 14 L 12.246094 14 C 13.207031 14 14 13.207031 14 12.246094 L 14 2.757813 C 14 1.792969 13.207031 1 12.246094 1 Z M 2.757813 2 L 12.246094 2 C 12.667969 2 13 2.332031 13 2.757813 L 13 12.246094 C 13 12.667969 12.667969 13 12.246094 13 L 2.757813 13 C 2.332031 13 2 12.667969 2 12.246094 L 2 2.757813 C 2 2.332031 2.332031 2 2.757813 2 Z M 4 3 C 3.449219 3 3 3.449219 3 4 C 3 4.550781 3.449219 5 4 5 C 4.550781 5 5 4.550781 5 4 C 5 3.449219 4.550781 3 4 3 Z M 3 6 L 3 12 L 5 12 L 5 6 Z M 6 6 L 6 12 L 8 12 L 8 9.320313 C 8 8.488281 8.078125 7.742188 9.078125 7.742188 C 10.0625 7.742188 10 8.636719 10 9.375 L 10 12 L 12 12 L 12 9.039063 C 12 7.320313 11.640625 6 9.691406 6 C 8.753906 6 8.28125 6.375 8.023438 6.875 L 8 6.875 L 8 6 Z"></path></svg>
            </li>
            <li className="list-inline-item me-4">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                   width="16" height="16"
                   viewBox="0 0 16 16"
                   fill="currentColor"><path d="M 7.5 1 C 3.910156 1 1 3.90625 1 7.488281 C 1 10.355469 2.863281 12.789063 5.445313 13.648438 C 5.769531 13.707031 6 13.375 6 13.125 C 6 12.972656 6.003906 12.789063 6 12.25 C 4.191406 12.640625 3.625 11.375 3.625 11.375 C 3.328125 10.625 2.96875 10.410156 2.96875 10.410156 C 2.378906 10.007813 3.011719 10.019531 3.011719 10.019531 C 3.664063 10.0625 4 10.625 4 10.625 C 4.5 11.5 5.628906 11.414063 6 11.25 C 6 10.851563 6.042969 10.5625 6.152344 10.378906 C 4.109375 10.019531 2.996094 8.839844 3 7.207031 C 3.003906 6.242188 3.335938 5.492188 3.875 4.9375 C 3.640625 4.640625 3.480469 3.625 3.960938 3 C 5.167969 3 5.886719 3.871094 5.886719 3.871094 C 5.886719 3.871094 6.453125 3.625 7.496094 3.625 C 8.542969 3.625 9.105469 3.859375 9.105469 3.859375 C 9.105469 3.859375 9.828125 3 11.035156 3 C 11.515625 3.625 11.355469 4.640625 11.167969 4.917969 C 11.683594 5.460938 12 6.210938 12 7.207031 C 12 8.839844 10.890625 10.019531 8.851563 10.375 C 8.980469 10.570313 9 10.84375 9 11.25 C 9 12.117188 9 12.910156 9 13.125 C 9 13.375 9.226563 13.710938 9.558594 13.648438 C 12.140625 12.785156 14 10.355469 14 7.488281 C 14 3.90625 11.089844 1 7.5 1 Z"></path></svg>
            </li>
            <li className="list-inline-item me-4">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                   width="16" height="16"
                   viewBox="0 0 16 16"
                   fill="currentColor"><path d="M 9.914063 0.71875 L 9.085938 1.28125 L 11.894531 5.367188 L 12.71875 4.800781 Z M 7.695313 2.453125 L 7.039063 3.207031 L 10.917969 6.582031 L 11.574219 5.828125 Z M 6.226563 4.804688 L 5.773438 5.695313 L 10.210938 7.953125 L 10.664063 7.0625 Z M 5.363281 7.140625 L 5.136719 8.109375 L 9.976563 9.242188 L 10.203125 8.265625 Z M 3 9 L 3 14 L 12 14 L 12 9 L 11 9 L 11 13 L 4 13 L 4 9 Z M 5.03125 9.25 L 4.96875 10.25 L 9.972656 10.566406 L 10.035156 9.570313 Z M 5 11 L 5 12 L 10 12 L 10 11 Z"></path></svg>
            </li>
            <li className="list-inline-item">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                   width="16" height="16"
                   viewBox="0 0 50 50"
                   fill="currentColor"><path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 21 11 L 11 20 L 17.78125 20 C 17.80125 22.847 19.967531 25.730469 23.769531 25.730469 C 24.129531 25.730469 24.529688 25.690391 24.929688 25.650391 C 24.749688 26.100391 24.560547 26.470078 24.560547 27.080078 C 24.560547 28.230078 25.140391 28.920078 25.650391 29.580078 C 24.020391 29.690078 20.989766 29.879531 18.759766 31.269531 C 16.629766 32.559531 15.980469 34.43 15.980469 35.75 C 15.980469 38.47 18.500469 41 23.730469 41 C 29.930469 41 33.220703 37.510547 33.220703 34.060547 C 33.220703 31.530547 31.779453 30.279922 30.189453 28.919922 L 28.900391 27.890625 C 28.500391 27.570625 27.949219 27.120312 27.949219 26.320312 C 27.949219 25.510313 28.500703 24.989766 28.970703 24.509766 C 30.480703 23.309766 32 21.960234 32 19.240234 C 32 18.197234 31.756203 17.348391 31.408203 16.650391 L 35 13.570312 L 35 17.277344 C 34.405 17.623344 34 18.261 34 19 L 34 25 C 34 26.104 34.896 27 36 27 C 37.104 27 38 26.104 38 25 L 38 19 C 38 18.262 37.595 17.624344 37 17.277344 L 37 12 C 37 11.957 36.980609 11.920906 36.974609 11.878906 L 38 11 L 21 11 z M 24.269531 14.240234 C 27.269531 14.240234 28.820312 18.35 28.820312 21 C 28.820312 21.65 28.739922 22.819922 27.919922 23.669922 C 27.339922 24.259922 26.370938 24.699219 25.460938 24.699219 C 22.370938 24.699219 20.949219 20.620156 20.949219 18.160156 C 20.949219 17.210156 21.14 16.220938 21.75 15.460938 C 22.33 14.710938 23.339531 14.240234 24.269531 14.240234 z M 26.039062 30.609375 C 26.409063 30.609375 26.590859 30.610391 26.880859 30.650391 C 29.620859 32.630391 30.800781 33.620234 30.800781 35.490234 C 30.800781 37.760234 28.97 39.460938 25.5 39.460938 C 21.64 39.460938 19.160156 37.590469 19.160156 34.980469 C 19.160156 32.370469 21.459766 31.499219 22.259766 31.199219 C 23.769766 30.679219 25.719062 30.609375 26.039062 30.609375 z"></path></svg>
            </li>
          </ul>
          </div>

          <div className="col-lg-4 text-center">
            <h1 className="fs-2 fw-bold text-center">Hansika Weerasena</h1>
            <h1 id="hanz-home-about-home">Computer Science Researcher | Engineer | Traveller</h1>
            <p id="hanz-home-about-p" className="fw-normal text-center">Hansika is a PhD Candidate at the Department of
              Computer &amp; Information Science &amp; Engineering, University of Florida, researching on communication
              security, network-on-chip and computer architecture.</p>
            <button className="btn btn-link btn-sm" type="button" data-bs-target="#">Read More About Hansika</button>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default App;