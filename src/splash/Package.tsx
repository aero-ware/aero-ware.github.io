import React from "react";

interface PackageProps {
    name: string;
}

function Package({ name }: PackageProps) {
    return (
        <div className="package">
            <a
                href={`https://www.npmjs.com/package/@aeroware/${name}`}
                target="_blank"
                rel="noreferrer"
            >
                <h3 className="title">
                    <span className="red">@aeroware/</span>
                    {name}
                </h3>
            </a>
            <img src={`https://img.shields.io/npm/dt/@aeroware/${name}.svg`} alt="" />
            <img src={`https://img.shields.io/npm/v/@aeroware/${name}.svg`} alt="" />
        </div>
    );
}

export default Package;
