import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Canceled = () => {

    return (
        <div className="success-wrapper">
            <div className="success">
                <h2>Oops, transaction was unsuccessful.</h2>
                <Link href="/">
                    <button type="button" width="300px" className="btn">Back to Home Page</button>
                </Link>
            </div>
        </div>
    )
}

export default Canceled;