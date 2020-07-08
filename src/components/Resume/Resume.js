import React from "react";
import "./Resume.css";

function Resume () {
    return (
        <div className="Resume">
            <div className="Resume__header">
                <div className="Resume__header-row Resume__header-row--title">
                    <div>{'Jonathan'}</div>
                    <div>{'Elbom'}</div>
                </div>
                <div className="Resume__header-row Resume__header-row--subtitle">
                    {'(Interaction, Motion, UI, Engineering) => Me'}
                </div>
                <div className="Resume__header-row Resume__header-row--info">
                    <div>{'Jb@Jonnybomb.com'}</div>
                    <div>{'•'}</div>
                    <div>{'Http://Portfolio.Jonnybomb.com'}</div>
                    <div>{'•'}</div>
                    <div>{'2129 Emma Long St, Austin, TX 78723'}</div>
                    <div>{'•'}</div>
                    <div>{'(512) 587-2940'}</div>
                </div>
            </div>
        </div>
    )
}

export default Resume;