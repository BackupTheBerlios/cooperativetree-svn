package org.cooperativetree.server.model;

import java.util.List;

/**
 * represent the node idea.
 * @author flo
 *
 */
public class IdeaNode{
    Long id;
    String name;
    String desc;
    User creator;
    List<Vote> votes;
    List<IdeaNode> childs;
    List<User> listenerUsers;
}
