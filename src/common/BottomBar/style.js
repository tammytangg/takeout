import styled from 'styled-components';

export const TabWrapper = styled.div`
    position:fixed;
    bottom:0;
    width:100%;
    height:50px;
    display:flex;
    border-top: 1px solid #b6b6b6;
    background-color:rgba(246,246,246,0.95);
`;

export const TabItem = styled.div`
    flex:1;
    font-size:11px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#999; 
    &.active{
        color:#000;
    }

    .tab-icon{
        margin-bottom:4px;
        width:25px;
        height:25px;
        background-size:cover;
    }

    &.home{
        .tab-icon{
            background-image:url('img/homeIcon.png');
        }
    }

    &.home.active{
        .tab-icon{
            background-image:url('img/homeIconActive.png');
        }
    }

    &.order{
        .tab-icon{
            background-image:url('img/orderIcon.png');
        }
    }

    &.order.active{
        .tab-icon{
            background-image:url('img/orderIconActive.png');
        }
    }

    &.my{
        .tab-icon{
            background-image:url('img/myIcon.png');
        }
    }

    &.my.active{
        .tab-icon{
            background-image:url('img/myIconActive.png');
        }
    }

`;

export const TabIcon = styled.div`
   
    
    &.home{
        background-image:url('img/homeIcon.png');
        &.active{
            background-image:url('img/homeIconActive.png');
        }
    }
    &.my{
        background-image:url('img/myIcon.png');
        &.active{
            background-image:url('img/myIconActive.png');
        }
    }
    &.order{
        background-image:url('img/orderIcon.png');
        &.active{
            background-image:url('img/orderIconActive.png');
        }
    }
`;

export const TabName = styled.div`
`;


