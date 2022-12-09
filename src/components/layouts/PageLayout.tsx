import React from 'react';
import './PageLayout.scss';
import {Parallaxer} from "./Parallaxer";

export const PageLayout: React.FC<{
    children: any
}> = ({children}) =>  {
    return (
        <section className="PageLayout">
            <Parallaxer>
                <div className='ContentArea'>
                    <header>
                        This is the header
                    </header>
                    {children}
                </div>
            </Parallaxer>
        </section>
    );
}

