import React from "react";
import './index.css';

function Footer() {
    return (
        <div className="footer">
            <div className="item1">
                <h1 className="FooterTittle">Footer Navigation</h1>
                <hr className="underline" />
                <p className="context">Home Page</p>
                <hr className="underline" />
                <p className="context">Our Services</p>
                <hr className="underline" />
                <p className="context">Meet the Team</p>
                <hr className="underline" />
                <p className="context">Blog</p>
                <hr className="underline" />
                <p className="context">Contact Us</p>
                <hr className="underline" />
                <p className="context">Gallery</p>
                <hr className="underline" />
                <p className="context">Portfolio</p>
                <hr className="underline" />
                <p className="context">Online Shop</p>
            </div>
            <div className="item2">
                <h1 className="FooterTittle">Latest Gallery</h1>
                <hr className="underline2" />
                <table className="boxesContainer">
                    <tr>
                        <td>
                            <div className="boxes"></div>
                        </td>
                        <td>
                            <div className="boxes"></div>
                        </td>
                        <td>
                            <div className="boxes"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="boxes"></div>
                        </td>
                        <td>
                            <div className="boxes"></div>
                        </td>
                        <td>
                            <div className="boxes"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="boxes"></div>
                        </td>
                        <td>
                            <div className="boxes"></div>
                        </td>
                        <td>
                            <div className="boxes"></div>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="item3">
                <h1 className="FooterTittle">From Twitter</h1>
                <hr className="underline2" />
                <p className="Footertext">
                    @ name RT @ nameDonec suscipit vehicula turpis sed lutpat Quisque vitae quam neque. about 9 hours ago
                </p>
                <hr className="underline" />
                <p className="Footertext">
                    @ name RT @ name Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque. about 9 hours ago
                </p>
                <hr className="underline" />
                <p className="Footertext">
                    @ name RT @ name Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque. about 9 hours ago
                </p>
                <hr className="underline" />
                <p className="Footertext">
                    @ name RT @ name Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque. about 9 hours ago
                </p>
            </div>
            <div className="item4">
                <h1 className="FooterTittle">Contact Us</h1>
                <hr className="underline2" />
                <div className="form">
                    <p className="Footertext">Name</p>
                    <p><input type="text" name="name" /></p>
                    <p className="Footertext">Email</p>
                    <p><input type="text" name="email" /></p>
                    <p><textarea type="massage" name="name"></textarea></p>
                    <div className="button1">Submit</div>
                    <div className="button2">Reset</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;