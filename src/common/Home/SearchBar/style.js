import styled from 'styled-components';

function px2rem(pxValue) {
    const rem = 37.5;
    return `${pxValue / rem}rem`;
}

const TopSearchBarWrapper = styled.div`
	width: 100%;
	height:${px2rem(40)};
	position: absolute;
	display:flex;
	align-items:center;
	justify-content:center;
	padding-top:${px2rem(14)};
	.bar-location {
		margin-right: ${px2rem(20)};
		border-radius: ${px2rem(13)};
		background-color: rgba(0,0,0,0.33);
		height:${px2rem(28)};
		width:${px2rem(100)};
	}
	.location-icon {
		display: inline-block;
		width: ${px2rem(15)};
		height:${px2rem(20)};
		vertical-align: ${px2rem(8)};
		margin-left: ${px2rem(8)};
		background-image: url('img/home/locationicon.png');
		background-size: cover;
	}
	.location-text {
		position:relative;
		display: inline-block;
		font-size: ${px2rem(14)};
		color: #fff;
		vertical-align: ${px2rem(12)};
		margin-left: ${px2rem(8)};
		margin-right: ${px2rem(19)};
		&:after {
			content: '';
			display: block;
			position:absolute;
			width:${px2rem(14)};
			height:${px2rem(14)};
			background-image: url('img/home/arrowIcon.png');
			background-size: cover;
			top: ${px2rem(-1)};
			right:${px2rem(-16)};
		}
	}

	.search-btn{
		width: ${px2rem(200)};
		height: ${px2rem(30)};
		background: #fff;
		border-radius: ${px2rem(20)};
		position: relative;
		&:before {
			position:absolute;
			content: '';
			display: block;
			width: ${px2rem(14)};
			height: ${px2rem(14)};
			background-image: url('img/home/searchIcon.png');
			background-size: cover;
			top:${px2rem(7)};
			left:${px2rem(10)};
		}
	}

	.place-holder {
		font-size: ${px2rem(14)};
		color: #a9a9a9;
		height: ${px2rem(30)};
		line-height: ${px2rem(30)};
		margin-left: ${px2rem(30)};

	}
`;

export default TopSearchBarWrapper;
