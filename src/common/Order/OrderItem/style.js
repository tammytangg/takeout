import styled from 'styled-components';

function px2rem(pxValue) {
    const rem = 37.5;
    return `${pxValue / rem}rem`;
}

const OrderItemWrapper = styled.div`
	border-top: ${px2rem(13)} solid #efefef;
	.order-item-inner {
		display: flex;
		padding-bottom: ${px2rem(18)};
		border-bottom: ${px2rem(1)} solid #e0e0e0;
	}
	.item-img {
		width: ${px2rem(40)};
		height: ${px2rem(40)};
		margin-top: ${px2rem(8)};
		margin-left: ${px2rem(16)};
		border-radius: 50%;
		background-color: #ccc;
	}
	.item-right {
		flex: 1;
		margin-left: ${px2rem(15)};
	}
	.item-top {
		height: ${px2rem(55)};
		padding-top: ${px2rem(2)};
		display: flex;
		align-items: center;
		border-bottom: 1px solid #e0e0e0;
	}
	.order-name {
		font-size: ${px2rem(16)};
		width: ${px2rem(180)};
		line-height: ${px2rem(16)};
		font-weight: 600;
	}
	.arrow {
		width: ${px2rem(8)};
		height: ${px2rem(8)};
		border: ${px2rem(1)} solid #999;
		border-width: ${px2rem(1)} ${px2rem(1)} 0 0;
		transform: rotate(45deg);
		-webkit-transform: 45deg;
	}
	.order-state {
		margin-left: ${px2rem(40)};
		font-size: ${px2rem(14)};
		color: #999;
	}
	.evaluation {
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.evaluation-btn {
		float: right;
		width: 100px;
		height: 32px;
		color: #6b450a;
		background-color: #ffd161;
		font-size: 14px;
		line-height: 32px;
		text-align: center;
		margin-right: 10px;
	}
`;

const ProductItemWrapper = styled.div`
	font-size: ${px2rem(14)};
	color: #666;
	margin-top: ${px2rem(12)};
	.p-count {
		float: right;
		margin-right: 15px;
	}
	.p-total-count {
		float: right;
		margin-right: 15px;
		font-size: 12px;
	}
	.total-price {
		font-size: 14px;
		color: #151515;
		margin-left: 2px;
		letter-spacing: 1px;
	}
`;

export { OrderItemWrapper, ProductItemWrapper };
