import React from 'react';
import './Parallaxer.scss';

export const Parallaxer: React.FC<{
    children: any
}> = ({children}) =>  {
    return (
        <div className="Parallaxer">
            <div className="parallax__layer parallax__layer__0">
                <img
                    src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_0.png?raw=true"/>
            </div>
            <div className="parallax__layer parallax__layer__1">
                <img
                    src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true"/>
            </div>
            <div className="parallax__layer parallax__layer__2">
                <img
                    src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true"/>
            </div>
            <div className="parallax__layer parallax__layer__3">
                <img
                    src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true"/>
            </div>
            <div className="parallax__layer parallax__layer__4">
                <img
                    src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true"/>
            </div>
            <div className="parallax__layer parallax__layer__5">
                <img
                    src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_5.png?raw=true"/>
            </div>
            <div className="parallax__layer parallax__layer__6">
                <img
                    src="https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true"/>
            </div>
            <div className="parallax__cover">{children}</div>

        </div>
    );
}

