import React from 'react';
import logo from "../assets/img/photo.jpeg";

export function HomePub() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <h3>Recent Publications</h3>
                </div>
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item"><span className="fw-bold">Conference Proceedings</span>
                            <ul>
                                <li>Lightweight Encryption using Chaffing and Winnowing with All-or-Nothing Transform
                                    for Network-on-Chip Architectures H. Weerasena et al., 2021 IEEE International
                                    Symposium on Hardware Oriented Security and Trust (HOST) - pp. 170-180
                                </li>
                                <li>Continuous Automatic Bioacoustics Monitoring of Bird Calls with Local Processing on
                                    Node Level H. Weerasena et al., TENCON 2018 - 2018 IEEE Region 10 Conference, Jeju,
                                    Korea (South), 2018, pp. 0235-0239
                                </li>
                            </ul>
                        </li>
                        <li className="list-group-item"><span className="fw-bold">Patents</span>
                            <ul>
                                <li>Securing on-chip communication using chaffing and winnowing with all-or-nothing
                                    transform P .Mishra, H. Weerasena and S. Charles, U.S. Provisional Patent
                                    Application Serial No 63/275,552, filed November 4, 2021
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}