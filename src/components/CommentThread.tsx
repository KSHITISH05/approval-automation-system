// src/components/CommentThread.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Comment {
  id: string;
  content: string;
  createdAt: string;
  user: {
    firstName: string;
    lastName: string;
  };
}

interface Props {
  documentId: string;
  approvalId: string;
}

export default function CommentThread({ documentId, approvalId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchComments() {
      try {
        interface FetchCommentsResponse {
          success: boolean;
          comments: Comment[];
        }

        const res = await axios.get<FetchCommentsResponse>(`/api/comments/${documentId}`);
        if (res.data.success) {
          setComments(res.data.comments);
        }
      } catch (err) {
        console.error("Failed to fetch comments", err);
      } finally {
        setLoading(false);
      }
    }
    fetchComments();
  }, [documentId]);

  async function handleAddComment() {
    if (!newComment.trim()) return;
    try {
      interface AddCommentResponse {
        success: boolean;
        comment: Comment;
      }

      // Only include approvalId if it is a non-empty string
      const payload: any = {
        content: newComment,
      };
      if (approvalId && approvalId !== "") {
        payload.approvalId = approvalId;
      }

      const res = await axios.post<AddCommentResponse>(`/api/comments/${documentId}`, payload);
      if (res.data.success) {
        setComments((prev) => [...prev, res.data.comment]);
        setNewComment("");
      }
    } catch (err) {
      console.error("Error adding comment", err);
    }
  }

  return (
    <div className="bg-white/5 p-4 rounded mt-4 border border-white/10">
      <h2 className="text-xl font-semibold mb-3">💬 Comments</h2>

      {loading ? (
        <p className="text-gray-300">Loading...</p>
      ) : (
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {comments.map((comment) => (
            <div key={comment.id} className="text-sm text-black">
              <span className="font-semibold text-blue-700">
                {comment.user
                  ? `${comment.user.firstName || ""} ${comment.user.lastName || ""}`.trim() || "Unknown User"
                  : "Unknown User"}
              </span>{" "}
              <span className="text-gray-500 text-xs">
                ({new Date(comment.createdAt).toLocaleString()})
              </span>
              <p>{comment.content}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-3 flex gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Type a comment..."
          className="flex-1 px-3 py-2 rounded bg-gray-50 text-black border border-gray-300"
        />
        <button
          onClick={handleAddComment}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded"
        >
          Post
        </button>
      </div>
    </div>
  );
}
/*
This component implements a comment thread/discussion system with the following features:

1. Display:
- Shows a list of comments in a scrollable container (max height 60)
- Each comment shows:
  - User's full name (or "Unknown User" if not available) 
  - Timestamp in localized format
  - Comment content
- Loading state shows "Loading..." while fetching comments

2. Interaction:
- Has an input field for typing new comments
- Post button to submit new comments
- Comments are stored with user info and timestamp

3. State Management:
- Maintains state for:
  - List of comments
  - New comment text input
  - Loading state while fetching
- Updates comment list in real-time when new comments are added

4. Styling:
- Uses Tailwind CSS for styling
- Comments area has a subtle background and border
- Scrollable comment list with max height
- Input field and button styled consistently
- Responsive layout with flex positioning

5. Error Handling:
- Catches and logs errors during comment submission
- Provides visual feedback during loading

Props:
- documentId: ID of the document being commented on
- approvalId: ID of the approval (optional)

The component provides a complete comment thread interface for users to view 
and add comments in a clean, organized format.
*/
