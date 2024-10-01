import api from "../../store/api";

/*
TODO: Define the following 4 endpoints:
  1. getPuppies (query)
  2. getPuppy (query)
  3. addPuppy (mutation)
  4. deletePuppy (mutation)

The query endpoints should provide the "Puppy" tag.
The mutation endpoints should invalidate the "Puppy" tag.

(Optional) TODO: Write `transformResponse` and `transformErrorResponse`
functions for each endpoint.
*/

const puppyApi = api.injectEndpoints({
	endpoints: (build) => ({
		getPuppies: build.query({
			query: () => "puppies",
			providesTags: ["Puppy"],
		}),
		getPuppy: build.query({
			query: (id) => `puppies/${id}`,
			providesTags: ["Puppy"],
		}),
		addPuppy: build.mutation({
			query: (puppy) => ({
				url: "puppies",
				method: "POST",
				body: puppy,
			}),
			invalidatesTags: ["Puppy"],
		}),
		deletePuppy: build.mutation({
			query: (id) => ({
				url: `puppies/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Puppy"],
		}),
	}),
});

export const {
	useGetPuppiesQuery,
	useGetPuppyQuery,
	useAddPuppyMutation,
	useDeletePuppyMutation,
} = puppyApi;
