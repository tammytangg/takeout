import styled from 'styled-components';

function px2rem(pxValue) {
    const rem = 37.5;
    return `${pxValue / rem}rem`;
}

const ListItemWrapper = styled.div`
	display: flex;
	padding-top: ${px2rem(15)};
	padding-bottom: ${px2rem(15)};
	margin-left: ${px2rem(10)};
	margin-right: ${px2rem(10)};
	color: #656565;
	&:after {
		background-color: #e4e4e4;
	}
	.item-img {
		width: ${px2rem(86)};
		height: ${px2rem(65)};
		border: ${px2rem(1)} solid #e4e4e4;
	}
	.item-info-content {
		flex: 1;
		margin-left: ${px2rem(7)};
	}
	.brand{
		position: absolute;
		left: ${px2rem(1)};
		top: ${px2rem(16)};
		font-size: ${px2rem(12)};
		padding: ${px2rem(2)};
		color: #fff;
		background-color: #ffa627;
	}
	.brand-pin{
		background-color: #ffa627;
	}
	.brand-xin{
		background-color: #21c56c;
	}
	.item-title{
		margin-top: ${px2rem(3)};
		font-size: ${px2rem(16)};
		font-weight: 500;
		color: #333;
	}
	.item-desc {
		margin-top: ${px2rem(13)};
		font-size: ${px2rem(12)};
	}
	.star {
		width: ${px2rem(10)};
		height: ${px2rem(10)};
		float: left;
		background-size: cover;
	}
	.fullstar {
		background-image: url('img/home/fullstar.png');
	}
	.halfstar {
		background-image: url('img/home/halfstar.png');
	}
	.nullstar {
		background-image: url('img/home/graystar.png');
	}
	.item-score {
		float: left;
	}
	.item-count {
		float: left; 
		margin-left: ${px2rem(5)};
	}
	.item-distance {
		float: right;
	}
	.item-time {
		float: right;
	}
	.item-meituan-flag{
		float: right;
		background-color: #ffd161;
	}
	.other-info {
		color: #898989;
		margin-top: ${px2rem(7)};
		font-size: ${px2rem(12)};
	}
	.other-tag {
		width: ${px2rem(14)};
		height: ${px2rem(14)};
		display: inline-block;
	}
	.other-content {
		display: inline-block;
		vertical-align: ${px2rem(3)};
		margin-left: ${px2rem(3)};
		height: ${px2rem(14)};
		width: ${px2rem(230)};
	}
	.item-price {
		margin-top: ${px2rem(10)};
		font-size: ${px2rem(12)};
		height: ${px2rem(24)};
	}
	.item-pre-price {
		float: left;
	}
`;

export default ListItemWrapper;
