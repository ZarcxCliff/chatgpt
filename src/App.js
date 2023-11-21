import "./App.css";
import gptLogo from "./Assets/chatgpt.svg";
import addBtn from "./Assets/add-30.png";
import msgIcon from "./Assets/message.svg";
import home from "./Assets/home.svg";
import saved from "./Assets/bookmark.svg";
import rocket from "./Assets/rocket.svg";
import send from "./Assets/send.svg";
import chatLogo from "./Assets/chatgptLogo.svg";
import userIcon from "./Assets/user-icon.png";
function App() {
	return (
		<div className="App">
			<div className="sidebar">
				<div className="upperside">
					<div className="upperside-top">
						<img
							src={gptLogo}
							alt="logo"
							className="logo"
						/>
						<span className="span">ChatGPT</span>
					</div>
					<button className="midBtn">
						<img
							src={addBtn}
							alt="new-chat"
							className="addBtn"
						/>{" "}
						New ChatGPT
					</button>
					<div className="upperSidebottom">
						<button className="querry">
							<img
								src={msgIcon}
								alt="querry"
							/>
							What is programming
						</button>
						<button className="querry">
							<img
								src={msgIcon}
								alt="querry"
							/>
							How to use an API
						</button>
					</div>
				</div>
				<div className="lowerside">
					<div className="listItems">
						<img
							src={home}
							alt="home"
							className="listItemsImg"
						/>
						Home
					</div>
					<div className="listItems">
						<img
							src={saved}
							alt="saved"
							className="listItemsImg"
						/>
						Saved
					</div>
					<div className="listItems">
						<img
							src={rocket}
							alt="rocket"
							className="listItemsImg"
						/>
						Upgrade
					</div>
				</div>
			</div>
			<div className="main">
				<div className="chats">
					<div className="chat">
						<img
							className="chatImg"
							src={userIcon}
							alt=""
						/>
						<p className="txt">
							Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Cupiditate impedit deserunt
						</p>
					</div>
					<div className="chat bot">
						<img
							className="chatImg"
							src={chatLogo}
							alt="face"
						/>
						<p className="txt">
							Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Cupiditate impedit deserunt
							minus sed recusandae eius nemo provident unde
							officia voluptatibus, cum quisquam eaque maxime
							magni? Sed accusantium quos et laborum itaque
							rerum nulla porro fugiat rem ducimus! Veniam
							totam, corporis ea iure necessitatibus quam
							eveniet minus possimus rem commodi. Corrupti
							perferendis maxime nemo quia vero rem quidem
							voluptatibus vel, sit voluptatum! Rerum quia
							est ex quod itaque voluptatibus aut earum eius
							modi odio? Repudiandae, sed amet accusamus at
							explicabo facere?
						</p>
					</div>
				</div>
				<div className="chatFooter">
					<div className="inp">
						<input
							type="text"
							placeholder="send a message"
						/>
						<button className="send">
							<img
								src={send}
								alt="send"
							/>
						</button>
					</div>
				</div>
				<p>chatgpt can give wrong results</p>
			</div>
		</div>
	);
}

export default App;
