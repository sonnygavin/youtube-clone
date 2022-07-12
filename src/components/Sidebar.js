import React from "react";

function Sidebar() {
    return (
        <div class="sidebar-component">
        <div class="sb-section-1 sb-sections">
            <p class="explore-section sb-items sb-home-button"><span class="icons"><i class="fa-thin fa-gear"></i></span> Home</p>
            <p class="explore-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> Explore</p>
            <p class="explore-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> Shorts</p>
            <p class="explore-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> Subscriptions</p>
        </div>
        <hr/>
        <div class="sb-section-2 sb-sections">
            <p class="watch-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> Library</p>
            <p class="watch-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> History</p>
            <p class="watch-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> Your Videos</p>
            <p class="watch-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> Watch Later</p>
            <p class="watch-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> Liked Videos</p>
            <p class="watch-section sb-items"><span class="icons"><i class="fa-light fa-angle-down"></i></span> Show more</p>
        </div>
        <hr/>
        <div class="sb-section-3 sb-sections">
            <p class="subscriptions-section sb-section-header sb-headers">SUBSCRIPTIONS</p>
            <p class="subscriptions-section sb-items"><span class="icons"><img class="subscriptions-portraits" src="gavin-portrait.jpg" alt=""/></span> Kurt Caz <span class="icons"><i class="fa-thin fa-gear"></i></span></p>
            <p class="subscriptions-section sb-items"><span class="icons"><img class="subscriptions-portraits" src="gavin-portrait.jpg" alt=""/></span> Ace Live <span class="icons"><i class="fa-thin fa-gear"></i></span></p>
            <p class="subscriptions-section sb-items"><span class="icons"><img class="subscriptions-portraits" src="gavin-portrait.jpg" alt=""/></span> Sonny Gavin <span class="icons"><i class="fa-thin fa-gear"></i></span></p>
            <p class="subscriptions-section sb-items"><span class="icons"><img class="subscriptions-portraits" src="gavin-portrait.jpg" alt=""/></span> Volpe Where Are You <span class="icons"><i class="fa-thin fa-gear"></i></span></p>
            <p class="subscriptions-section sb-items"><span class="icons"><img class="subscriptions-portraits" src="gavin-portrait.jpg" alt=""/></span> Sabbatical <span class="icons"><i class="fa-thin fa-gear"></i></span></p>
            <p class="subscriptions-section sb-items"><span class="icons"><img class="subscriptions-portraits" src="gavin-portrait.jpg" alt=""/></span> BBC News Africa <span class="icons"><i class="fa-thin fa-gear"></i></span></p>
            <p class="subscriptions-section sb-items"><span class="icons"><img class="subscriptions-portraits" src="gavin-portrait.jpg" alt=""/></span> Mr. Beast <span class="icons"><i class="fa-thin fa-gear"></i></span></p>
            <p class="subscriptions-section sb-items"><span class="icons"><img class="subscriptions-portraits" src="gavin-portrait.jpg" alt=""/></span> Richard Medhurst <span class="icons"><i class="fa-thin fa-gear"></i></span></p>
            <p class="watch-section sb-items"><span class="icons"><i class="fa-light fa-angle-down"></i></span> Show 35 more</p>

        </div>
        <hr/>
        <div class="sb-section-4 sb-sections">
            <p class="services-section sb-section-header sb-headers">MORE FROM YOUTUBE</p>
            <p class="services-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> YouTube Premium</p>
            <p class="services-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> Gaming</p>
            <p class="services-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> Live</p>
            <p class="services-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> Sports</p>
        </div>
        <hr/>
        <div class="sb-section-5 sb-sections">
            <p class="help-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> Setings</p>
            <p class="help-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> Report History</p>
            <p class="help-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> Help</p>
            <p class="help-section sb-items"><span class="icons"><i class="fa-thin fa-gear"></i></span> Send feedback</p>
        </div>
        <hr/>
        <div class="sb-section-6 sb-sections">
            <div class="top-footer-text">
                <div class="top-footer-text-1 footer-items">About</div>
                <div class="top-footer-text-2 footer-items">Press</div>
                <div class="top-footer-text-3 footer-items">Copyright</div>
                <div class="top-footer-text-4 footer-items">Contact us</div>
                <div class="top-footer-text-5 footer-items">Contact us</div>
                <div class="top-footer-text-6 footer-items">Creators</div>
                <div class="top-footer-text-7 footer-items">Advertise</div>
                <div class="top-footer-text-8 footer-items">Developers</div>
            </div>
            <div class="bottom-footer-text">
                <div class="bottom-footer-text-1 footer-items">Terms</div>
                <div class="bottom-footer-text-2 footer-items">Privacy</div>
                <div class="bottom-footer-text-3 footer-items">Policy & Safety</div>
                <div class="bottom-footer-text-4 footer-items">How YouTube works</div>
                <div class="bottom-footer-text-5 footer-items">Test new features</div>
            </div>
            <p class="copyright-text footer-items sb-headers">© 2022 Google LLC</p>
        </div>
    </div>
    );
}

export default Sidebar;