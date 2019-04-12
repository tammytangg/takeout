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
		border: 1px solid #e4e4e4;
	}
	.item-info-content {
		flex: 1;
		margin-left: ${px2rem(7)};
	}
	.brand{
		position: absolute;
		left: 1px;
		top: 16px;
		font-size: 12px;
		padding: 2px;
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
		margin-top: 3px;
		font-size: 16px;
		font-weight: 500;
		color: #333;
	}
	.item-desc {
		margin-top: 13px;
		font-size: 12px;
	}
	.star {
		width: 10px;
		height: 10px;
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
		margin-left: 5px;
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
		margin-top: 7px;
		font-size: 12px;
	}
	.other-tag {
		width: 14px;
		height: 14px;
		display: inline-block;
	}
	.other-content {
		display: inline-block;
		vertical-align: 3px;
		margin-left: 3px;
		height: 14px;
		width: 230px;
	}
	.item-price {
		margin-top: 10px;
		font-size: 12px;
		height: 24px;
	}
	.item-pre-price {
		float: left;
	}
`;

export default ListItemWrapper;
