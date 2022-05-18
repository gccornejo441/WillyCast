import * as React from 'react';

export const Comment = () => {
    return (
        <div className="bg-amber-100">
            <div>
                <h1>Radiolab</h1>
                <h2>Debatable</h2>
                <h3>May 4th, 2022</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
                <div className="border-2 border-black flex justify-between">
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            className="border-2 border-black"
                        >
                            Comment{'3k'}
                        </button>
                        <button
                            className="border-2 border-black"
                        >
                            Views{'50k'}
                        </button>
                    </div>
                    <div>
                        <button>Leave A Comment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}