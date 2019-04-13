import styled from 'styled-components';

function px2rem(pxValue) {
    const rem = 37.5;
    return `${pxValue / rem}rem`;
}

const MyWrapper = styled.div`
`;

const HeaderWrapper = styled.div`
	width: 100%;
	height: ${px2rem(160)};
	background-image: url('img/my/header.png');
	background-size: cover;
	overflow: hidden;
	.avatar {
		width: ${px2rem(72)};
		height: ${px2rem(72)};
		margin: 0 auto;
		display: block;
		margin-top: ${px2rem(25)};
		border: ${px2rem(3)} solid rgba(255,255,255,0.4);
		border-radius: 50%;
	}
	.nickname {
		color: #333;
		font-size: ${px2rem(16)};
		text-align: center;
		margin-top: ${px2rem(15)};
	}
`;

const ContentWrapper = styled.div`
	min-height: 507px;
	background-color: #eee;
	.items {
		border-bottom: 10px solid #eee;
		background-color: #fff;
		li {
			height: 45px;
			font-size: 14px;
			line-height: 45px;
			position: relative;
			padding-left: 26px;
			margin-left: 15px;
			border-bottom: 1px solid #e4e4e4;
			&:last-child {
				border: none;
			}
			&:before {
				content: '';
				display: block;
				width: 16px;
				height: 16px;
				position: absolute;
				top: 50%;
				left: 1px;
				-webkit-transform: translateY(-50%);
				transform: translateY(-50%);
				background-size: cover;
			}
			&:after {
				content: '>';
				display: block;
				width: 16px;
				height: 16px;
				position: absolute;
				top: 0;
				right: 9px;
				color: #aaa;
			}
		}
		.address {
			&:before {
				background-image: url('img/my/address.png');
			}
		}
		.money {
			&:before {
				background-image: url('img/my/money.png');
			}
		}
		.email {
			&:before {
				background-image: url('img/my/email.png');
			}
		}
		.question {
			&:before {
				background-image: url('img/my/question.png');
			}
		}
	}
	.tel {
		font-size: 15px;
		color: #ffb000;
		text-align: center;
		height: 46px;
		line-height: 46px;
		background-color: #fff;
	}
	.time {
		font-size: 15px;
		color: #ffb000;
		text-align: center;
		margin-top: 13px;
		color: #999;
	}
`;

export { MyWrapper, HeaderWrapper, ContentWrapper };
