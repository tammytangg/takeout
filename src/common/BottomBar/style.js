import styled from 'styled-components';

function px2rem(pxValue) {
    const rem = 37.5;
    return `${pxValue / rem}rem`;
}

const TabWrapper = styled.div`
    position:fixed;
    bottom:0;
    width:100%;
    height:${px2rem(50)};
    display:flex;
    border-top: ${px2rem(1)} solid #b6b6b6;
    background-color:rgba(246,246,246,0.95);
`;

const TabItem = styled.div`
	flex:1;
	font-size:${px2rem(11)};
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	color:#999;
	&.active{
		color:#000;
	}
	.tab-icon{
		margin-bottom:${px2rem(4)};
		width:${px2rem(25)};
		height:${px2rem(25)};
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
	a{
		align-items:center;
		text-decoration: none;
	}
`;

export { TabWrapper, TabItem };
