import React, { Component } from 'react';
import * as marked from 'marked';

export default class MarkdownEditor extends Component {
	state = {
		title: 'Markdown Editor',
		inputMarkdown: `I'm __using__ *markdown*`,
	};

	handleTextareaChange = e => {
		this.setState({ inputMarkdown: e.target.value });
	};

	renderMarkdownToHtml() {
		return { __html: marked(this.state.inputMarkdown) };
	}

	render() {
		return (
			<section className="section">
				<div className="container">
					<h1 className="title">{this.state.title}</h1>
					<div className="columns">
						<div className="column">
							<label className="label">Markdown input</label>
							<div className="control">
								<textarea
									class="textarea"
									value={this.state.inputMarkdown}
									onInput={this.handleTextareaChange}
								/>
							</div>
						</div>
						<div className="column">
							<label className="label">Markdown output</label>
							<div className="box" dangerouslySetInnerHTML={this.renderMarkdownToHtml()} />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
