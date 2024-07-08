<template>
    <div style="display: flex;flex-direction: column;">
        <RouterLink to="/" style="align-self: flex-start;padding:0px;padding-left:.5rem;padding-top:.5rem; margin-left: -30px;margin-top: -30px;"><i class='bx bx-arrow-back'  style="color:black;margin-top: .5rem;align-self: flex-start; font-size: 2rem;cursor:pointer" ></i></RouterLink>
        <div class="tikbody" >
        
        <h1 style="font-size: 4.5rem;color: black;">X & O</h1>
        
        <div class="links">
            <RouterLink to="/tictactoe/singleplayer" class="homeLink">
                <div class="iconBox">
                    <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="description">
                        <h4>vs. computer</h4>
                    </div>
                </div>
            </RouterLink>
            <RouterLink to="/tictactoe/multiplayer" class="homeLink">
                <div class="iconBox">
                    <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 20V18C13 15.2386 10.7614 13 8 13C5.23858 13 3 15.2386 3 18V20H13ZM13 20H21V19C21 16.0545 18.7614 14 16 14C14.5867 14 13.3103 14.6255 12.4009 15.6311M11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7ZM18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="description">
                        <h4>Pass and Play</h4>
                    </div>
                </div>
            </RouterLink>
        </div>

        </div>
    </div>
    
</template>

<style scoped>

@media only screen and (max-width: 600px) {
    .links{
    
    flex-direction: column;
    align-items: center;
    justify-content: center ;
    
    }
    .tikbody{
        margin-top: 3rem;
    }
    .iconBox{
        margin: 0px;
    }
}
.description{
    display: block;
}
.links{
    margin-top: 2rem;
}
.iconBox{
    margin: 4px;
}
.tikbody{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>