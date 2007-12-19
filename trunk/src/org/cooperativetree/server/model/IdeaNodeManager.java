package org.cooperativetree.server.model;


import java.util.List;



public interface IdeaNodeManager {

	/**
	 * create a new idea node.
	 * @return the id of the new idea node
	 */
	public Long create();
	
	/**
	 * retrieve the Idea node object for a giver id
	 * @param ideaNodeId id of the Idea node
	 * @return the IdeaNode Object
	 */
	public IdeaNode getIdeaNode(Long ideaNodeId);
	
	/**
	 * append a new Idea Node as child of a parent Idea Node
	 * @param parentIdeaNodeId id of the parent Idea node
	 * @param newIdeaNodeId id of the new Idea node
	 */
	public void append(Long parentIdeaNodeId,Long newIdeaNodeId);
	
	/**
	 * insert a new Idea Node as previous brother of the brother Idea Node
	 * @param brotherIdeaNodeId id of the brother Idea node
	 * @param newIdeaNodeId id of the new Idea node
	 */
	public void insertBefore(Long brotherIdeaNodeId,Long newIdeaNodeId);

	/**
	 * detach an idea node from his parentNode
	 * @param ideaNodeId id of the Idea node to detach
	 */
	public void detach(Long ideaNodeId);
	
	/**
	 * delete completely an idea node
	 * @param ideaNodeId id of the Idea node
	 */	
	public void delete(Long ideaNodeId);
	
	/**
	 * set the name of the node : the short string display to the user
	 * @param ideaNodeId
	 * @param name
	 */
	public void setName(Long ideaNodeId,String name);
	
	/**
	 * set the creator of the node
	 * @param ideaNodeId id of the Idea node
	 * @param userId the id of the User who create this node and have special right on it
	 */
	public void setCreator(Long ideaNodeId,Long userId);
	
	/**
	 * set the description of the node
	 * @param ideaNodeId id of the Idea node
	 * @param description The long text that explain deeply he purpose of the node
	 */
	public void setDescription(Long ideaNodeId,String description);
	
	/**
	 * add a voter to this node
	 * @param ideaNodeId id of the Idea node
	 * @param userId id of the voter
	 */
	public void vote(Long ideaNodeId,Long userId);
	
	/**
	 * remove a voter to this node
	 * @param ideaNodeId id of the Idea node
	 * @param userId id of the voter
	 */
	public void unVote(Long ideaNodeId,Long userId);
	
	/**
	 * add a competitive node to the targeted node.
	 * If the targeted was not a competitive node ,it is replaced by a new competitive node 
	 * which has two child : the targeted node and the new Node.
	 * If the targeted node was already in a competitive node,
	 * the new node is simply append to the competitive node.
	 * @param targetIdeaNodeId the id of the targetNode that will be competitive
	 * @param newIdeaNodeId the id of the NewNode that will be competing with targetNode
	 * @return the id of the new competitiveNode
	 */
	public Long appendCompetitive(Long targetIdeaNodeId,Long newIdeaNodeId);
	
	/**
	 * Blocking method that return when a one or many nodes have been modified
	 * @param ideaNodeIds the list of node to listen to
	 * @return the list of node that changed in the order of update
	 */
	public List<Long> listenTo(List<Long> ideaNodeIds);
	
}